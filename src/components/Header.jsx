function Header({handleToggleDarkMode, darkMode}) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button 
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} 
        className="btn"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default Header;