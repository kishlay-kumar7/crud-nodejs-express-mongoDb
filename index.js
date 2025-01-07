const express = require("express");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
main()
  .then(() => {
    console.log("succesfully connected with the data base");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsap");
}
app.post("/chats/new", async (req, res) => {
  try {
    const { from: sender, to: towhom, message: msg } = req.body;
    let newChat = new Chat({
      from: sender,
      to: towhom,
      message: msg,
      date: new Date(),
    });
    await newChat.save();
    console.log("entered succesfully");
    res.redirect("/chats");
  } catch (err) {
    res.status(500).send("error occured while saving the data");
  }
});
app.delete("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedChat = await Chat.deleteOne({ _id: id });
    if (!updatedChat) {
      return res.status(404).send("chat not found,try deleting different chat");
    }
    if (updatedChat.deletedCount > 0) {
      console.log(updatedChat);
      console.log("deletd from db");
    } else {
      console.log("No chat found to be deleted");
    }
    res.redirect("/chats");
  } catch (err) {
    res.status(500).send("something went wrong while deleting form db");
  }
});
app.patch("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      { _id: id },
      { message: message },
      { new: true }
    );
    if (!updatedChat) {
      return res.status(404).send("chat wasn't in database");
    }
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    res.status(500).send("something went wrong while updating");
  }
});
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  let data = await Chat.find({ _id: id });
  res.render("edit", { data });
});
app.get("/chats/new", (req, res) => {
  res.render("newchat");
});
app.get("/chats", async (req, res) => {
  let data = await Chat.find();
  //   console.log(data[0]._id);

  res.render("index.ejs", { data });
});
app.listen(8000, () => {
  console.log("server listening succesfully");
});
