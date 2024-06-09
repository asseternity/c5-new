import Tab from './Tab';

export default function Test() {
  const links = [
    { name: 'link 1', link: '' },
    { name: 'link 2', link: '' },
    { name: 'link 3', link: '' },
    { name: 'link 4', link: '' },
  ];
  return (
    <div>
      <Tab linksArray={links} />
    </div>
  );
}
