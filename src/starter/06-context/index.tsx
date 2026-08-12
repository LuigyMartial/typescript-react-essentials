import { useTheme, ThemeProvider } from "./context";

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2>React & Typescript</h2>
      <button onClick={() => {
        if(context.theme === 'dark'){
          context.setTheme('system');
          return;
        }
        context.setTheme('dark');
      }} 
        className="btn btn-center"
      >
        toggle theme
      </button>
    </div>
  );
}

function ParentComponent(){
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

export default ParentComponent;
