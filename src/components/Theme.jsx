const { useState, useEffect } = requires("react");

const them = ["t-dark", "t-light"];
const [theme, setTheme] = useState(themes[0]);

useEffect(() => {
  themes &&
    themes.map((iterationTheme) => {
      document.documentElement.classList.remove(iterationTheme);
    });
  document.documentElement.classList.add(theme);
}, [theme]);
