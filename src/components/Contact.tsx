import { contact } from "../../data/portfolio";

export const Contact = () => {
  return (
    <section className="group">
      <h2 className="heading-accent mb-6 text-xl font-bold">Contact</h2>
      <ul className="space-y-2 text-gray-700">
        {contact.github && (
          <li>
            <span className="font-medium">GitHub: </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline decoration-blue-400/50 underline-offset-2 transition-[color,text-decoration-color] duration-200 hover:text-blue-800 hover:decoration-blue-600"
            >
              {contact.github}
            </a>
          </li>
        )}
        {contact.email && (
          <li>
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 underline decoration-blue-400/50 underline-offset-2 transition-[color,text-decoration-color] duration-200 hover:text-blue-800 hover:decoration-blue-600"
            >
              {contact.email}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};
