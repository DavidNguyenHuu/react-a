import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmFor="title">Full Name: </label>
          <input type="text" required id="Title" />
        </div>
        <div className={classes.control}>
          <label htmFor="image">E-mail: </label>
          <input type="url" required id="image" />
        </div>

        <div className={classes.action}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
