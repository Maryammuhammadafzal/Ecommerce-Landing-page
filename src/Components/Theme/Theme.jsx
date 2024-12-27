// import React, {useState , useEffect} from 'react'


// const Theme = () => {
//         const [theme, setTheme] = useState(true)
//         const [themeColor, setThemeColor] = useState('light')
//         const [themeIcon, setThemeIcon] = useState(<IoSunny size={20}
//                 color={'#000'} />)
//                 const [themeText, setThemeText] = useState('Light')
//                 useEffect(() => {
//                         const storedTheme = localStorage.getItem('theme');
//                         if (storedTheme) {
//                                 setThemeColor(storedTheme);
//                                 setTheme(storedTheme === 'light');
//                                 setThemeIcon(storedTheme === 'light' ? <IoSunny size={20}
//                                         color={'#000'} /> : <HiMoon size={20}
//                                         color={'#000'} />);
//                                         setThemeText(storedTheme === 'light' ? 'Light' : 'Dark');
//                                         }
//                                         }, []);
//                                         useEffect(() => {
//                                                 localStorage.setItem('theme', themeColor);
//                                                 document.body.classList.add(themeColor);
//                                                 document.body.classList.remove(themeColor === 'light' ? 'dark' : 'light');
//                                                 }, [themeColor]);
//                                                 useEffect(() => {
//                                                         if (themeColor === 'light') {
//                                                                 document.body.style.backgroundColor = '#f0f0f0';
//                                                                 document.body.style.color = '#000';
//                                                                 }
//                                                                 else {
//                                                                         document.body.style.backgroundColor = '#000';
//                                                                         document.body.style.color = '#fff';
//                                                                         }
//                                                                         }, [themeColor]);
//                                                                         useEffect(() => {
//                                                                                 document.title = themeText;
//                                                                                 }, [themeText]);
//                                                                                 useEffect(() => {
//                                                                                         setThemeIcon(theme === true ? <IoSunny size={20}
//                                                                                                 color={'#000'} /> : <HiMoon size={20}
//                                                                                                 color={'#000'} />);
//                                                                                                 }, [theme]);
//                                                                                                 const handleThemeChange = () => {
//                                                                                                         setTheme(!theme);
//                                                                                                         setThemeColor(themeColor === 'light' ? 'dark' : 'light');
//                                                                                                         setThemeText(themeText === 'Light' ? 'Dark' : 'Light');
//                                                                                                         }
//                                                                                                         return (
//                                                                                                                 <div className="theme-container">
//                                                                                                                         <div className="theme-toggle" onClick={handleThemeChange}>
//                                                                                                                                 <div className="theme-icon">{themeIcon}</div>
//                                                                                                                                 <div className="theme-text">{themeText}</div>
//                                                                                                                         </div>
//                                                                                                                 </div>
//                                                                                                         );
//                                                                                                 }




// //   return (
// //     <>
// //       <label htmlFor="theme-icon">
// //                 <input type="checkbox" name="theme-icon" id="theme-icon" className='dark' />
// //                 {<IoSunny />}
// //                </label>
// //     </>
// //   )
// // }

// export default Theme
