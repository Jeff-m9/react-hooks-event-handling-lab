// Code EyesOnMe Component Here

function EyesOnMe() {
  const onFocusMessage = () => {
    console.log("Good!");
  };

  const onBlurMessage = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <button onFocus={onFocusMessage} onBlur={onBlurMessage}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe
