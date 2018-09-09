# Observables and Promises.
*Observables are just like promises.*
```
promise.then(
    successFn,
    errorFn,
);
```
```
observables.subscribe(
    nextFn,
    errorFn,
    completeFn,
);
```
 
 ----------
 

# RxJs. Operators.
*Operators tak your observable and return a new observable.*

### Familiar:
 - **``map``** - regular map for stream data;  
 - **``filter``** - pass only for data with correct conditions;  
 - **``debounceTime``** - like debounce;  
 - **``distinctUntilChanged``** - pass only if data is changed;  
 - **``throttleTime``** - like throttle;  
 - **``reduce``** - like reduce;  
 - **``scan``** - similar to reduce, but it can provide intermediate values;  
 - **``pluck``** - extract properties from the object;  
 - **``mergeMap``** - can combine data from two Observables;  
 - **``switchMap``** - allow to trigger some values emission whenever another observable emits a value;  

### Not used yet:
 - **``takeUntil``** - two observables, emit first until second provided observable values;  
 - **``combineLatest``** - when any observable emits a value, emit the latest value from each;
 - **``concat``** - subscribe to observables in order as previous completes, emit values;  
 - **``tap``** - transparently perform actions or side-effects, such as logging;  
