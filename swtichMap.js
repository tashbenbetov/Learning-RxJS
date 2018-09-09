// <button>Click me</button>

var button = document.querySelector('button');

var observable1 = Rx.Observable.fromEvent(button, 'click');
var observable2 = Rx.Observable.interval(1000);

observable1.switchMap(
	event => {
        return observable2;
    }
).subscribe({
	next: value => console.log(value),
});
