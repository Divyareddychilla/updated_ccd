# Loader component

## Circular with Loader
we are rendering one of the loader with circular type , if you want more props for this loader you can refer CircularProgressProps.
```js
    const loaderDetailsCircular = {
    color: 'success' as CircularProgressProps['color'],
    showProgress: true,
    progress: 10,
    disableShrink: true,
  };
```
we should pass this data for common Circularloader component

```js
        <Loader type="circular" 
        color={loaderDetailsCircular.color} 
        showProgress={loaderDetailsCircular.showProgress} 
        progress={loaderDetailsCircular.progress} 
        disableShrink={loaderDetailsCircular.disableShrink} />
       
```

> **_NOTE:_**  type="circular" should pass to render only circular Loader.








## Linear with Loader
we are rendering one of the loader with Linear type , if you want more props for this loader you can refer LinearProgressProps.
```js
   const loaderDetailsLinear = {
    color: 'primary' as LinearProgressProps['color'],
    showProgress: true,
    progress: 50,
  };
```
we should pass this data for common Linearloader component

```js
        <Loader type="linear" color={loaderDetailsLinear.color} showProgress={loaderDetailsLinear.showProgress} progress={loaderDetailsLinear.progress} />
```

> **_NOTE:_**  type="linear" should pass to render only Linear Loader.







## customizedbar with Loader
we are rendering one of the loader with customizedbar type , you can pass multiple color as you like to get the gradient color combination for your loader.
```js
     const customGradientColors = [
    { offset: '10%', color: '#FF5733' },
    { offset: '50%', color: '#C70039' },
    { offset: '100%', color: '#900C3F' },
  ];
```
we should pass this data for common customizedbarloader component

```js
        <Loader type="customizedbar" gradientColors={customGradientColors} />
       
```
> **_NOTE:_** type="customizedbar" should pass to render only customizedbar Loader.






## integration_loader with Loader
we are rendering one of the loader with circular_child type ,this is to render a child component{may be your choice} with an loading effect.

```js
      const integrationSimple = {
    color: 'success' as CircularProgressProps['color'],
  };
```
we should pass this data for integration_loader component

```js
        <Loader type="circular_child" childLoading={loading} color={integrationSimple.color}>
          <Typography>
            Hello
          </Typography>
        </Loader>
        <Loader type="circular_child" childLoading={loading} color={integrationSimple.color} >
          <p onClick={handleButtonClick}>Custom Card Content</p>
        </Loader>
```
> **_NOTE:_** type="circular_child" should pass to render only integration_loader Loader.



## possible options to use loaders for default styles
## for circular
if you want to use only loader circular type
```js
   <Loader type="circular" />
```
>**_NOTE_** you can pass type="circular" for default styles if you needed 

## for linear
if you want to use only loader linear type
```js
   <Loader type="linear" />
```
>**_NOTE_** you can pass type="linear" for default styles if you needed

## for gradient color of loader
if you want the default gradient color 
```js
   <Loader type="customizedbar" />
```
>**_NOTE_** you can pass type="customizedbar" for default styles if you needed 

## integration loader for child component
if you want the loader for a child of any component
```js
    <Loader type="circular_child" childLoading={loading}>
          <p onClick={handleButtonClick}>Custom Card Content</p>
        </Loader>
```
>**_NOTE_** you have to pass type , chidloading and also onclick action to get the integration loader

## only loader
if you pass only loader , by default it will give the circular loader properties , because we pass default type="circular"
```js
   <Loader />
```
>**_NOTE_** if you dont want default type="cicular" , you can pass the linear as a default type.