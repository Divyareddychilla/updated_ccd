# Notification component 

## Alert with notification
using alert to render notification any where you need.
properties we are using to render notification with alert. if you need more props for alerts please look into **AertLocalProps** types.
```js
  const alertDetails:AlertLocalProps = {
    severity: 'warning',
    children: "this is an error Alert.",
    autoHideDuration: 4000,
    icon: <CheckIcon fontSize="inherit" />,
  };
```
we should pass this data to common alert component.

```js
    <Notification
        type="alert"
        alertInfo={alertDetails}
    />
```
> **_NOTE:_**  type="alert" should pass to render only alert notification.


## Snackbar with notification
using snackbar to render notification at any position you want. properties we are using to render notification with snackbar. please look into **SnackbarLocalProps** types if you need more props.
```js
     const snackbarDetails:SnackbarLocalProps = {
    autoHideDuration: 6000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    message: "Note archived",
    children: <p>this is an error Alert.</p>
  };
```
we have to pass the above data to the common snackbar component.

```js
   <Notification
          type="snackbar"
          alertInfo={snackbarDetails}
        /> 
```
> **_NOTE:_** type="Snackbar" should pass to get Snackbar notification.


## combinationSnackbarAler with notification
using the combination of snackbar and alert to render notification at any position you want. properties we are using to render notification with snackbaralert. please look into both **SnackbarLocalProps** and **AlertLoaclProps** types if you need more props with these two combination.
```js
const combinationSnackbarAlertDetails:CombinedSnackbarProps = {
    alertTextInfo: {
      severity: 'warning',
      children: "this is an error Alert.",
      icon: <CheckIcon fontSize="inherit" />,
    },
    containerInfo:{
      autoHideDuration: 8000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center' 
      },
    },

  };
```
we have to pass the above data to get both the combination to the notification
```js
 <Notification
          type="combinedSnackbarAlert"
          alertInfo={combinationSnackbarAlertDetails}
        />
```
> **_NOTE:_** type="combinedSnackbarAlert" should pass to get SnackbarAlert notification.


## Note on Snackbar with notification
if you want to use childern in snackbar you have to apply your own styles to your component , incase if you use message which is a property of snackbarLocalProps it will give you the default styles.
```js
     const snackbarDetails:SnackbarLocalProps = {
    autoHideDuration: 6000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    message: "Note archived",
  };
```
we have to pass the above data to get the default styles of the snackbar extend from snackbarLocalProps
```js
   <Notification
          type="snackbar"
          alertInfo={snackbarDetails}
        /> 
```

> **_NOTE:_** type="snackbar" outcome styles depends upon the property{message or children} used for your component.