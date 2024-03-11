import PropTypes from 'prop-types';
function Card(props) {
  return (
    <>
      <div className="card-container container-fluid  flex flex-col place-items-center bg-slate-900 text-white w-80">
        <span className={`text-center rounded-md self-start m-5 w-24 pb-1 pt-1 ${props.online? "bg-green-600" : " bg-orange-600"}`}>
          {props.online?"Online":"Offline"}
        </span>
        <img
          className="rounded-full border-2 p-1 border-blue-600"
          src={props.profile}
          alt="profile-Image"
          width={150}
          height={150}
        />
        <h1 className="p-3 text-4xl">{props.name}</h1>
        <h4 className="pb-2">{props.job}</h4>
        <h3 className="pb-2">{props.location}</h3>
        <div className="btns flex gap-3 m-5">
          <a href={props.github} target='_blank'>
            <button className="border-2 border-blue-900 text-black p-1 bg-blue-500 w-24">
              Github
            </button>
          </a>
          <a href={props.linkedin} target='_blank'>
            <button className="border-2 border-blue-900 text-black p-1 bg-blue-500 w-24">
              LinkedIn
            </button>
          </a>
        </div>
        <div className="user-skills mt-3 bg-gray-800 p-4">
          <h4 className="mb-3">Skills</h4>
          <ul className="flex gap-3 flex-wrap">
            {props.skills.map((skill,index)=><li key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;

Card.propTypes = {
  online: PropTypes.bool.isRequired,  
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
