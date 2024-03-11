import Card from "./Card";
const usersInfo = [
  {
    online: true,
    profileImg:"https://pbs.twimg.com/media/D1eNiM2WkAERy0u.jpg",
    name: "Rocky Bhai",
    location: "Kannur, Kerala",
    job: "Front-end Developer",
    github: "#",
    linkedin: "#",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "SQL",
      "Bootstrap",
      "Tailwindcss",
    ],
  },
  {
    online: false,
    profileImg: "https://st1.bollywoodlife.com/wp-content/uploads/2022/02/Alia-Bhatt-in-Gangubai-Kathiawadi.jpg",
    name: "Gangu Bhai",
    location: "Chennai, TN",
    job: "Software Engineer",
    github: "#",
    linkedin: "#",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "SQL",
      "Bootstrap",
      "Tailwindcss",
    ],
  },
  {
    online: true,
    profileImg: "https://pbs.twimg.com/profile_images/501343685078831104/DpSrRVSG_400x400.jpeg",
    name: "Raju Bhai",
    location: "Vadakkan, North",
    job: "Business",
    github: "#",
    linkedin: "#",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "SQL",
      "Bootstrap",
      "Tailwindcss",
    ],
  },
  {
    online: false,
    profileImg: "https://www.indiablooms.com/showbiz_pic/2017/Rajini-1488717492.jpg",
    name: "Basha Bhai",
    location: "Madurai, TN",
    job: "Software Engineer - Tester",
    github: "#",
    linkedin: "#",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "SQL",
      "Bootstrap",
      "Tailwindcss",
    ],
  },
];
function Content() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {usersInfo.map((user, index) => (
        <Card
          key={index}
          profile={user.profileImg}
          name={user.name}
          job={user.job}
          location={user.location}
          skills={user.skills}
          online={user.online}
          github={user.github}
          linkedin={user.linkedin}
        />
      ))}
    </div>
  );
}

export default Content;

{
  /* <Card profile={profile1} name="Aswin M A" job="Front-end Developer" location="Kannur, Kerala" skills={["HTML", "CSS", "Javascript", "React", "Bootstrap", "Tailwindcss", "Java", "SQL", "Git", "Figma"]} github="https://github.com/aswin-ashokan" linkedin="https://www.linkedin.com/in/aswin-ashokan/"/> */
}
