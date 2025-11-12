import React from 'react';

const achievements = [
  { year: '2025', text: 'Shortlisted, Uganda Press Photo Awards (UPPA) 2025' },
  { year: '2025', text: 'Featured photographer, Editorial Docu-Magazine' },
  { year: '2025', text: 'Exhibited Protest Through Our Lens at Baraza Media Ground, Nairobi' },
  { year: '2025', text: 'Showcased work at Africa Media Festival, Nairobi National Museum' },
  { year: '2024', text: 'Winner, Our World Is Kind Photography Competition (Public Choice Award) by Envision Kindness' },
  { year: '2024', text: 'Longlisted, BOOOOOM Photo Awards (Top 150 out of 16,000 entries)' },
  { year: '2024–2025', text: 'Collaborations with Samuel Hall, Ebanos Stories, InYourShoes, SHOFCO, and the Belt of Somali Women' },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-400">Achievements</h2>
          <p className="text-lg text-gray-400 mt-2">Selected recognitions and collaborations</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-gray-200">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start space-x-4">
                <div className="text-amber-400 font-semibold w-24">{a.year}</div>
                <div>{a.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
