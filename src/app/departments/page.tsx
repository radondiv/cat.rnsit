
export default function DepartmentsPage() {
  const departments = [
    { name: 'CSE', desc: 'Computer Science & Engineering at RNSIT.' },
    { name: 'ISE', desc: 'Information Science & Engineering.' },
    { name: 'ECE', desc: 'Electronics & Communication Engineering.' },
    { name: 'EEE', desc: 'Electrical & Electronics Engineering.' },
    { name: 'Mechanical', desc: 'Mechanical Engineering.' },
    { name: 'Civil', desc: 'Civil Engineering.' },
    { name: 'AI/ML', desc: 'Artificial Intelligence & Machine Learning.' },
    { name: 'Data Science', desc: 'Data Science Engineering.' }
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 h1-liquid">Departments</h1>
      <ul className="space-y-3">
        {departments.map(d => (
          <li key={d.name} className="glass p-4 rounded-xl">
            <div className="font-semibold">{d.name}</div>
            <div className="opacity-80">{d.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
