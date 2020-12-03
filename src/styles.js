import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 0",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
  },
  heading: {
    color: "white",
    fontSize: "2rem",
  },
}));
