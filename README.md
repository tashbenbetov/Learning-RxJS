# Observables and Promises.
*Observables are just like promises.*
```
promise.then(
    successFn,
    errorFn,
);
```
```
observable.subscribe(
    nextFn,
    errorFn,
    completeFn,
);
```
 
 ----------
 
# Observables. Structure.
```
var observable = Rx.Observable.create(observer => {
    observer.next(VALUE);
    ...
    observer.complete();
});
observable.subscribe({
    next: value => console.log(value);
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
})
```
 
 ----------
 
# Create Observables.
- **``create``** - create an observable with given subscription function;
- **``fromEvent``** - turn event into observable;
 
 ----------
 
# RxJs. Operators.
*Operators take your observable and return a new observable.*

### Familiar:
 - **``map``** - map one Observable in another Observable (synchronous way);  
 - **``filter``** - pass only data that has correct conditions;  
 - **``debounceTime``** - like debounce;  
 - **``distinctUntilChanged``** - pass only if data is changed;  
 - **``throttleTime``** - like throttle;  
 - **``reduce``** - like reduce;  
 - **``scan``** - similar to reduce, but it can provide intermediate values;  
 - **``pluck``** - extract properties from the object;  
 - **``mergeMap``** - can combine data from two Observables, one observable in another (asynchronous way);  
 - **``switchMap``** - allow to trigger some values emission whenever another observable emits a value;  
 - **``from``** - turn an array, promise, or iterable into an observable;  
 - **``of``** - emit variable amount of values in a sequence;  
  - **``concat``** - subscribe to observables in order as previous completes, emit values;  

### Not used yet:
 - **``takeUntil``** - two observables, emit first until second provided observable values;  
 - **``take``** - emit provided number of values before completing;  
 - **``combineLatest``** - when any observable emits a value, emit the latest value from each;
 - **``tap``** - operator for perform actions or side-effects, such as logging, does not transform values (ex. do);  
 - **``merge``** - turn multiple observables into a single observable;  
 - **``forkJoin``** - when all observables complete, emit the last emitted value from each;  
 - **``pairwise``** - emit the previous and current values as an array;  
 - **``combineLatest``** - when any observable emits a value, emit the latest value from each.  
 - **``concatMap``** - map values to inner observable, subscribe and emit in order;  
 
 ----------
 
# Redux-observable.
**1.** Observables in Redux-observable === Epics;  
**2.** Observer in Redux-observable === store.dispatch;    
**3.** Epic main principle: Action IN => Action OUT;  
**4.** Final scheme:  
```epic(action*, store).subscribe(store.dispatch)```  
