const Chat = require("./models/chat.js");
const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsap");
  console.log("db connection made succesfully");
  const chatData = [
    {
      from: "Alice",
      to: "Bob",
      message: "Hello, how are you?",
      date: new Date("2023-12-01T10:00:00Z"),
    },
    {
      from: "Bob",
      to: "Alice",
      message: "I'm good, thanks! How about you?",
      date: new Date("2023-12-01T10:05:00Z"),
    },
    {
      from: "Charlie",
      to: "Dave",
      message: "Did you finish the project?",
      date: new Date("2023-12-01T11:00:00Z"),
    },
    {
      from: "Dave",
      to: "Charlie",
      message: "Yes, I submitted it this morning.",
      date: new Date("2023-12-01T11:10:00Z"),
    },
    {
      from: "Eve",
      to: "Frank",
      message: "Can we meet at 3 PM?",
      date: new Date("2023-12-01T12:00:00Z"),
    },
    {
      from: "Frank",
      to: "Eve",
      message: "Sure, I'll be there.",
      date: new Date("2023-12-01T12:05:00Z"),
    },
    {
      from: "Grace",
      to: "Hank",
      message: "Did you see the email from the manager?",
      date: new Date("2023-12-01T13:00:00Z"),
    },
    {
      from: "Hank",
      to: "Grace",
      message: "Yes, I'll reply soon.",
      date: new Date("2023-12-01T13:15:00Z"),
    },
    {
      from: "Ivy",
      to: "Jack",
      message: "Don't forget the meeting at 4 PM.",
      date: new Date("2023-12-01T14:00:00Z"),
    },
    {
      from: "Jack",
      to: "Ivy",
      message: "Got it, I'll be there.",
      date: new Date("2023-12-01T14:10:00Z"),
    },
    {
      from: "Karen",
      to: "Leo",
      message: "Happy Birthday!",
      date: new Date("2023-12-01T15:00:00Z"),
    },
    {
      from: "Leo",
      to: "Karen",
      message: "Thank you so much!",
      date: new Date("2023-12-01T15:20:00Z"),
    },
    {
      from: "Mona",
      to: "Nate",
      message: "Are you coming to the party tonight?",
      date: new Date("2023-12-01T16:00:00Z"),
    },
    {
      from: "Nate",
      to: "Mona",
      message: "Yes, see you there!",
      date: new Date("2023-12-01T16:10:00Z"),
    },
    {
      from: "Olivia",
      to: "Paul",
      message: "Let's finalize the report tomorrow.",
      date: new Date("2023-12-01T17:00:00Z"),
    },
  ];
  await Chat.insertMany(chatData);
  console.log("inserted properly");
}
main()
  .then(() => {
    console.log("result made properly");
  })
  .catch((err) => {
    console.log(err);
  });
