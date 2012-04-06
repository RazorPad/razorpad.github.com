# RazorPad Documentation
RazorPad is an online editor to play with Html Templates written using Razor syntax. This is a scratch pad to experiment with code snippets, before running in your full fledged project.

It is also meant to help learn the Razor engine and its internals. Once you understand the innards of Razor engine, you'll discover that Razor engine is not just limited to ASP.NET MVC world. You can host Razor engine in any .Net project to leverage its strongly typed template parsing abilities and even extend it to create elegant solutions for your templating problems.    

The idea of RazorPad is inspired from other snippet editors such LinqPad and jsFiddle.

If you are familiar with ASP.NET MVC, then the editor is essentially your cshtml/vbhtml file.  

## Basic Usage
RazorPad is divided into 2 panes- View pane and the Results pane and a sidebar. While we have taken care to make them as intuitive as possible, the following sections will you take you through them in detail.

### View Pane 
The view pane lets you create your template using Razor syntax. You can declare variables, Model and its properties to use them in the markup as you would in any normal ASP.NET MVC view.  

After entering your markup in the view pane, hit `Execute` to see the output in Results Pane.

You can add styles to your markup and the results pane will apply the styles to the output.

You can also enter script tags, however, any code inside them will not be executed. They will simple be rendered as plain text. 

### Results Pane 

The results pane contains 5 tabs:

 * Browser View
 * Html Source View
 * Parser Results
 * Generated Code
 * Messages

#### Browser View

If your template is valid, then you would see the output as it would appear in a browser.    
Any styles in the markup will be applied to the output. The only exception are script tags. Script tags will be rendered as plain text and the javascript in them will not be executed.

If you need to see the javascript in action, you can copy the Html source of the rendered markup and try it out in [jsFiddle](http://jsfiddle.net).

#### Html Source View

If your template is valid, then you would see the Html source of the rendered markup here. This is essentially doing a "View Source" on the browser view. 

#### Parser Results

This tab and the Generated Code are quite interesting. This shows the output after Razor engine has analyzed and parsed your view markup. Parsing the template text or the view markup is the first step towards compiling your view.
The parsed results appear as a Xml Tree, with each node representing a section of the view markup. The Xml tree will contain text and code expressions, as it would appear in your template. 

#### Generated Code

Once Razor engine has parsed the template, the next step is to generate a .Net class out of the parsed results. 
This compiled class is what ASP.NET uses to render the HTML response to the browser. 
When you compile your ASP.NET MVC project, you normally don't see this class (as a file) anywhere in the final output, since it is discarded once the assembly is built.
The Generated code tab shows you exactly what the class looks like.

#### Messages

Messages tab shows any error messages that get generated during any of the stages of parsing the template to rendering it down. 
This is a catch all tab for any and all error messages. 

Upon Execute, if you see the Browser View or Html Source View empty, it generally means there was an error at some point. 
Messages tab will contain detailed error information along with line number of relevant document (if applicable).

## Advanced Usage

Beyond the simple scenario of writing a Razor template and executing it, RazorPad, can supports few more advanced scenarios. 

### Sharing your snippets

You can save your Razor snippets by clicking Save. 
Your snippet is assigned a unique id and the Url is updated with the unique id. 

To access your snippet at a later time, simply copy/paste this Url in a browser.

### Saving your snippets and accessing them later

Optionally, you can sign in/sign up which allows you to save your snippets under your login.
You can use your existing Facebook, Google or Open Id account to sign in your you can sign up for a RazorPad account.
RazorPad doesn't use your email address for anything other than authentication to the site. 
 
You can access all your saved snippets anytime under "My Snippets"{TODO: Needs expansion, review}.

### Cloning your snippets

{TODO}



