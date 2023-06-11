# FORMS

# HTML form elements

You’ve seen many different HTML form elements before.

  We have <input>, <select>, and <textarea>, for example. These elements manage their own state in the browser, and once you submit a regular <form>, the browser makes a request and generally navigates to a new page. In React, we often want to intercept this process, so we can do something with the values (validation, transforming the data before submitting it, etc.) and if necessary send a request to the server. The way we can do this, is by controlling the form components.

## Controlled vs. Uncontrolled Components

If you don’t do anything, the input/select/textarea elements are uncontrolled. 

They manage their own internal state. To control these components, we move the responsibility of managing the state of these elements to React. To do this, we have to create some state to keep track of the value and provide the value as a prop to the element. We also have to create a change handler function to update the state when the user interacts with the element. 
  
Forms have several events connected with them. The most important ones are the change events triggered by the fields when the user enters or removes some data, and the submit event when the form as a whole is submitted. 

### Here is an example of a simple controlled form where the user can enter some text.

                    export const ControlledInputForm = () => {
                        const [inputValue, setInputValue] = useState('');

                        const handleChange = (event) => {
                            setInputValue(event.target.value);
                        }

                        const handleSubmit = (event) => {
                            event.preventDefault();
                            console.log(event);
                        };
                        return (
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={inputValue} onChange={handleChange}/>
                                <button type="submit" >Submit</button>
                            </form>
                            );
                    };

  The component above returns a form. This form has a single input element (line 15) and a submit button (line 16). The input element accepts a value prop and an onChange handler, which turn this into a controlled input. The form itself has an onSubmit handler, which makes the form as a whole controlled. 

  The value prop on the input has a value from the local state of the component (inputValue), and the handleChange function uses the setter function to update the state. The data from the form can be found in `event.target.value`, the target is the actual DOM element and the value is whatever is present in the input field. The form’s handleSubmit does an `event.preventDefault()`, which prevents the HTML form element’s default behavior (making a request at the specified URL and navigating to a new page). It then logs the event to the browser console, where you can see what data is entered by the user. 
  
  Granted, this looks much more complicated than a straight up HTML form, but it allows us to do some advanced things. We can check the validity of certain values or combinations of values, or we can transform the data and make our own custom request, saving the data to a database in our backend. 

## Exercise: Creating a Form
  
After this exercise, you will understand how to create a form in React.  

**Description**

Let’s build a form where the user can enter some data. Instead of having the default browser behavior, we append the data to the page, so we can immediately see it.

Download [this](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fde%2Frgaat%2Fafvcnaef%2Fvrge-mcil%2Fgxgraiqe%2Ffmros-svaptgr) folder and install the dependencies before running the dev server with `npm run dev`. Our app will show some famous quotes and allow the user to add to this list. We will be working in App.jsx, so open that file.

## Steps

- At the top, import { useState } from “react”, because we will keep some things in our state.

We have quotes for our collection of quotes, quote for the current quote being entered into our form, and name for the person who said it (which will also be in our form).

- So create 3 pieces of state to create these. If you need a refresher, it looks something like this:

        const [quotes, setQuotes] = useState([]);

where the empty array is the initial value. The other pieces of state can have an empty string as initial value.
  
- Now, we are ready to create our form. Beneath the first <h1>, add a <form>. Inside it, add a textarea and an input. Set the value attribute of the textarea to {quote}.

- Also add an onChange attribute, which you can assign to an inline arrow function which takes the event and calls setQuote with the event.target.value as argument.

- Set the value attribute of the input element to {name}, and add the onChange handler which calls setName.

- Add a button with a type of “submit” and a text of Add Quote. Now we need to write a submit handler, you can call this onSubmit, but we like to name it addQuote, because that is exactly what it should be doing. We write this outside of the JSX.

It is again a function that receives an event. In this case we first need to call event.preventDefault(), because the default behavior of a <form> is to send a request to the server and reload the page. After preventing this default behavior, call setQuotes and add an object at the beginning of the quotes array containing quote and name.

You don’t need to grab these from the event, because we have kept our local state in sync with the change handlers we wrote in the previous step.

- After adding the quote to the list, also reset the quote and name states so the form is emptied out.
  
  
