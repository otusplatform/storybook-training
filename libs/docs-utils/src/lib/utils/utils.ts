export const getModuleMetadata = (module) =>
  Reflect?.getOwnPropertyDescriptor(module, '__annotations__')?.value[0];

// eslint-disable-next-line @typescript-eslint/ban-types
const propsToArray = (props: object): any[] => {
  const arr: string[] = [];
  for (const prop in props) {
    if (prop !== 'ngContent') arr.push(prop);
  }
  return arr;
};

export const defaultTemplate = ({ name, args, tag = '', inject = '', selfClosing = false }) => {
  const start = tag ? `${tag} ${name}` : name;
  const props = propsToArray(args)
    .map((arg) =>
      arg.indexOf('on') === 0 ? `(${arg.substring(2)})="${arg}"` : `[${arg}]="${arg}" `
    )
    .join('');

  let end = `>${args.ngContent ? args.ngContent : ''}</${tag ? tag : name}`;
  if (selfClosing) {
    end = ' /';
  }
  return `<${start} ${inject} ${props}${end}>`;
};
