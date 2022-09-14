# Calculator Coding Challenge

### How to Run
`npm start` runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

### Assumptions
Calculator should have following basic functionality  
⦁	Handle standard arithmetic operators  
⦁	Handle decimal points  
⦁	Clear current and clear everything buttons  
⦁	Delete button to correct mistakes  

Assumptions regarding functionality  
⦁	Pressing equals should conclude current equation  
⦁	Should not be possible to apply operators in succession (e.g. `2++2`)  
⦁	Large numbers should be formatted for readability  

### Additional Features
⦁	International number formatting for completed calculations based on users local settings. (e.g. British format: '1,000,000', German: '1.000.000')  
⦁	List of previous calculations (up to 3)  

### Limitations
⦁	Somewhat responsive design, doesn't look good on mobile sizes though. I should have perhaps used CSS Grid or a lightweight CSS framework like Tailwind.  
⦁	Numbers can include multiple decimal points although not in succession (e.g. `2.5.5`). This doesn't cause any fatal issues but the equals button won't output anything. I ran out of time, but I imagine this problem could be overcome by splitting the calculation string on the operators and iterating over the numbers to see if they contain more than one decimal.  
⦁	One bug is that equations can be started with an operator which I didn't have time to fix. This doesn't cause any issues and simply treats the sum as having a zero. For example, `+3+3` would output `6` as it's treated like `0+3+3`. With more time I could have fixed this with an escape clause on the onClick event.  
⦁	Use of `eval()` function causes an eslint error stating `eval()` can be harmful. This is due to `eval()` possibly allowing cross site scripting attacks if not used correctly. Although due to this app not having any inputs and React naturally sanitising inputs, this shouldn't be an issue.  

### Future Enhancements
⦁	Percentage button. Not easily possible in current implementation due to `eval()` not recognising % as an operator. Would possibly have a function that checks for % and converts it into a mathematical expression (`100+10%` would become `100*0.10`). This would require some more research and testing though.  
⦁	Make the design more responsive so it works at all screen sizes.  
⦁	Add keybinds so that you can type your equations.   
⦁ Add unit tests  
⦁	Add more Accessibility (Lighthouse Accessibility score currently 76/100)  
⦁ Design is quite basic, could definitely look cooler  
