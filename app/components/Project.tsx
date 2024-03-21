import { useEffect, useState } from "react";

export function Project({ orgId }: any) {
  const [displayForm, setDisplayForm] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  const [project, setProject] = useState({ name: '', url: '' });
  const handleCreateProject = () => {
    localStorage.setItem('projects', JSON.stringify([...myProjects, { orgId: orgId, name: project.name, url: project.url, createdAt: new Date().toString() }]))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const filteredProjects = fetchedProjects.filter((project: any) => project.orgId === orgId);
      setMyProjects(filteredProjects);
    }
  }, [])



  return (
    <div className="flex flex-col">
      {
        !displayForm && <div className="flex flex-row justify-between items-center bg-blue-500 p-3  my-3 rounded">
          <h1 className="text-2xl font-bold text-white">
            My Projects
          </h1>
          <button
            className="bg-white p-3 border rounded font-medium"
            onClick={() => {
              console.log(displayForm)
              setDisplayForm(!displayForm)
            }}
          >
            Create Project
          </button>
        </div>
      }
      {
        !displayForm && <table className="table-auto text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {myProjects.map((project: any) => (
              <tr>
                <td><a href={`/project/${project['url']}`}>{project['name']}</a></td>
                <td>{project['url']}</td>
                <td>{project['createdAt']}</td>
                <td>
                  <button className="text-1xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                  </button>
                </td>
                <td>
                  <button className="text-1xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {
        displayForm && (<div className="p-52">
          <h1 className="text-2xl font-bold text-black text-center">
            Create Project
          </h1>
          <p className="text-center mt-5 mb-10">
            Fill in the details to create a new project
          </p>
          <form className="flex flex-col border-solid border-2 border-blue align-center justify-center p-3 rounded w-1/2 m-auto">
            <input type="text" className="border border-blue text-1xl p-3 my-2" placeholder="Project Name"
              onChange={(e) => setProject({ ...project, name: e.target.value })}
            />
            <input type="text" className="border border-blue text-1xl p-3 my-2" placeholder="Project URL"
              onChange={(e) => setProject({ ...project, url: e.target.value })}
            />
            <button
              className="bg-blue-500 text-white p-3 mt-5 border rounded font-medium"
              onClick={handleCreateProject}
              type="submit">Create</button>
          </form>
        </div>)
      }
    </div >
  );
}