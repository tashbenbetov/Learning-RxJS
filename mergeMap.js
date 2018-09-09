// <input type="text" id="input1">
// <input type="text" id="input2">

// <p>Combined value: <span></span></p>

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var observable1 = Rx.Observable.fromEvent(input1, 'input');
var observable2 = Rx.Observable.fromEvent(input2, 'input');

observable1
    .mergeMap(
        event1 => {
            return observable2.map(event2 => {
                const value1 = event1.target.value;
                const value2 = event2.target.value;

                return value1 + ' ' + value2;
            });
        })
        .subscribe({
            next: combinedValue => span.textContent = combinedValue,
        });
