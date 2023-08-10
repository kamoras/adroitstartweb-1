import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { decodeEmail } from '../utils';
const chris = '/images/chris.jpg'
const ryan = '/images/ryan.jpg'
const ben = '/images/ben.jpg'

const MeetUs = () => {
  const members = [
    {
      name: 'Benjamin Nadolsky',
      title: 'President',
      bio:
        '',
      imgSrc: ben,
      linkedin: 'https://www.linkedin.com/in/benjaminnadolsky/',
      twitter: 'https://twitter.com/Bennadolsky',
      email: 'YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn'
    },
    {
      name: 'Christopher Masuo',
      title: 'Secretary',
      bio:
        '',
      imgSrc: chris,
      linkedin: 'https://www.linkedin.com/in/chris-masuo-765330a2/',
      twitter: '#',
      email: 'bWFzdW9jakBnbWFpbC5jb20='
    },
    {
      name: 'Ryan Mack',
      title: 'Vice President',
      bio:
        '',
      imgSrc: ryan,
      linkedin: 'https://www.linkedin.com/in/ryan-mack/',
      twitter: 'https://twitter.com/kamoras95',
      email: 'bWFjay5yeWFubUBnbWFpbC5jb20='
    }
  ];

  return (
    <section className="bg-gray-100 py-16" id="meet-us">
      <div className="container px-4 mx-auto items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">Meet Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-56 h-56 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl text-gray-600 font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{member.title}</p>
              <p className="text-gray-700 text-base mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-adroitOrange"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-adroitOrange"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${decodeEmail(member.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-adroitOrange"
                  >
                    <FaEnvelope size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetUs;