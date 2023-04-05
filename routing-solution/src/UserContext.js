import { createContext, useState } from "react";

const UserContext = createContext();

function Provider(props) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Harry Potter",
      cast: "Daniel Radcliffe",
      pic: "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg",
      intro:
        "Perhaps it's a given that Harry Potter himself tops our list, but it's important to still reflect on why the character has been so universally accepted. He's a sympathetic figure; a kid plucked from unfortunate circumstances and thrust into a magical reality. He realizes he has been gifted with great power. And then he's pitted against the ultimate evil in the wizarding world, Lord Voldemort, who years ago killed his mother and father . Everybody loves an underdog story of good vs. evil and we've watched Harry grow up in this fantastic setting -- forming friendships, fighting foes, and finding love.",
    },
    {
      id: 2,
      name: "Ron Weasley",
      cast: "Rupert Grint",
      pic: "https://m.media-amazon.com/images/M/MV5BMTM3Zjk0YzgtZjk3Mi00NGZiLThmYzUtZWRkN2E4NWQ3M2E1XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
      intro:
        "Ron Weasley is Harry Potter's best friend and ever-present sidekick. But unlike most sidekicks, Ron isn't a coward or a simpleton, nor is he content to live in Harry's shadow. Of the three friends that make up the main cast of characters, Ron is the comic relief -- not an uncommon trait for sidekicks of his ilk -- a characteristic that makes him instantly endearing. And while he lacks Harry's natural magical talent, or Hermione's smarts, Ron overcomes his shortcomings with faithfulness and perseverance.",
    },
    {
      id: 3,
      name: "Hermione Granger",
      cast: "Emma Watson",
      pic: "https://miro.medium.com/max/612/1*N1jAR-lrHmrOPQCtneSjmw.jpeg",
      intro:
        "Hermione Granger, Harry Potter and Ron Weasley's best girl-pal, is so much more than just a token throw-in for female readers/viewers to identify with. In fact, she narrowly edges out Ron for second place on our list. Why? We're glad you asked... Potter author J.K. Rowling describes her as 'very logical, upright, and good.' And while she's at first painted as a brainy do-gooder who always plays by the rules, it's fun to watch Hermione develop into so much more over the course of the series.",
    },
    {
      id: 4,
      name: "Severus Snape",
      cast: "Alan Rickman",
      pic: "https://m.media-amazon.com/images/M/MV5BYmU1ZWI5ZGQtMWJkNi00OWQwLWFmYjYtMTA3N2NjM2VhNThjXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
      intro:
        "Whether you love him, or hate him, or love to hate him, Severus Snape makes quite an impact in the Harry Potter series. If you're Harry, Snape is a nightmare of a teacher – picking on the boy from the moment he stepped into Potions class, and showing clear favoritism toward Draco Malfoy and other Slytherin students. And yet… When Harry and his friends thought Snape was the one trying to steal the Sorcerer's Stone, it turned out he was trying to protect it, and every now and again, Snape actually seemed like he was trying to help these kids.",
    },
    {
      id: 5,
      name: "Albus Dumbledore",
      cast: "Richard Harris",
      pic: "https://assets-prd.ignimgs.com/2022/03/23/albus-dumbledore-1648062879994.JPG?fit=bounds&width=1280&height=720",
      intro:
        "For a character that was introduced into popular culture only in recent years, it speaks volumes that Professor Dumbledore has already taken his place among the great mentor figures in literature and film. Like Gandalf and Yoda before him, Albus Percival Wulfric Brian Dumbledore plays the role of wise sage, guide, and pseudo-grandfather in the story.",
    },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
