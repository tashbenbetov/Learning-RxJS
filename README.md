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
 

# Create Observables
- **``create``** - create an observable with given subscription function;
- **``fromEvent``** - turn event into observable;
 
 ----------
 

# RxJs. Operators.
*Operators take your observable and return a new observable.*

### Familiar:
 - **``map``** - regular map but for Observables;  
 - **``filter``** - pass only for data with correct conditions;  
 - **``debounceTime``** - like debounce;  
 - **``distinctUntilChanged``** - pass only if data is changed;  
 - **``throttleTime``** - like throttle;  
 - **``reduce``** - like reduce;  
 - **``scan``** - similar to reduce, but it can provide intermediate values;  
 - **``pluck``** - extract properties from the object;  
 - **``mergeMap``** - can combine data from two Observables (also flatMap);  
 - **``switchMap``** - allow to trigger some values emission whenever another observable emits a value;  
 - **``from``** - turn an array, promise, or iterable into an observable;  
 - **``of``** - emit variable amount of values in a sequence;  
  - **``concat``** - subscribe to observables in order as previous completes, emit values;  

### Not used yet:
 - **``takeUntil``** - two observables, emit first until second provided observable values;  
 - **``combineLatest``** - when any observable emits a value, emit the latest value from each;
 - **``tap``** - transparently perform actions or side-effects, such as logging;  
 - **``merge``** - turn multiple observables into a single observable;
 - **``takeUntil``** - emit values until provided observable emits;
