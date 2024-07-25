import reactImg from "../Image/React.png"
import adReactImg from "../Image/AdvanceReact.jpeg"
import reduxImg from "../Image/Redux.png"
import comImg from "../Image/component.jpeg"
import hooksImg from "../Image/reactHooks.jpeg"
import testImg from "../Image/testing.png"
const blogs = [
  {
    id: 1,
    topic: 'React Basics',
    heading: 'Introduction to React',
    description: 'Learn the fundamentals of React, including components, state, and props.',
    picture: reactImg
  },
  {
    id: 2,
    topic: 'Advanced React Patterns',
    heading: 'Deep Dive into Advanced Patterns',
    description: 'Dive deeper into advanced patterns like higher-order components and render props.',
    picture: adReactImg
  },
  {
    id: 3,
    topic: 'State Management with Redux',
    heading: 'Mastering Redux for State Management',
    description: 'Understand how to manage state in large applications using Redux.',
    picture: reduxImg
  },
  {
    id: 4,
    topic: 'Building Reusable Components',
    heading: 'Best Practices for Reusable Components',
    description: 'Best practices for building reusable and maintainable components in React.',
    picture: comImg
  },
  {
    id: 5,
    topic: 'React Hooks',
    heading: 'Simplifying Code with React Hooks',
    description: 'An introduction to React hooks and how they can simplify your code.',
    picture: hooksImg
  },
  {
    id: 6,
    topic: 'Testing in React',
    heading: 'Testing React Applications',
    description: 'Learn how to test your React applications using Jest and React Testing Library.',
    picture: testImg
  },
];

export default blogs;
