# Intellect Assessment(Widget development)

Clone the app in local, then in the terminal run `npm i` and then run `npm start` to start the app.

This app will contain the two widgets.

## Widget number 1

![Widget 1: circular progress bar](https://user-images.githubusercontent.com/32570766/203987546-41d37248-4bb4-47f4-8346-882abcc90dbe.png)


This is a status bar widget with the completion status shown on the circle above. Have used *svg*, *circle*, and *text* tags to create this widget. When we slide the bar the value is stored in the state and that state dynamically renders the circular completion bar above and the text value inside it. 


## Widget number 2

![Widget 1: Wifi signal indicator](https://user-images.githubusercontent.com/32570766/203989378-18e73ee0-7e09-4f46-8485-8fa20c2fb3f9.png)


This is a simple wifi signal connectivity widget. When user clicks on any of the bar the onClick funtion is triggered and the value associated with that bar is stored inside a state and that change in state dynamically renders the staus of the network (high or low). And as per the state of the bar selected all the bars below it are coloured white, this is done using conditionallly attaching the CSS class using that state variable.



Crafted with :heart: by Rishabh Mishra





