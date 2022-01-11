// eslint-disable @typescript-eslint/no-explicit-any
export const getModuleMetadata = (module: any) =>
  Reflect?.getOwnPropertyDescriptor(module, '__annotations__')?.value[0];

const propsToArray = (props: object): any[] => {
  const arr: string[] = [];
  for (const prop in props) {
    if (prop !== 'ngContent') arr.push(prop);
  }
  return arr;
};

export const defaultTemplate = ({
  name,
  args,
  ngContent,
  tag = '',
  inject = '',
  selfClosing = false,
}: {
  name: string;
  args: any;
  ngContent?: string;
  tag?: string;
  inject?: string;
  selfClosing?: boolean;
}) => {
  const start = tag ? `${tag} ${name}` : name;
  const props = propsToArray(args)
    .map((arg) =>
      arg.indexOf('on') === 0
        ? `(${arg.substring(2)})="${arg}"`
        : `[${arg}]="${arg}" `
    )
    .join('');

  let end = `>${ngContent ? ngContent : ''}</${tag ? tag : name}`;
  if (selfClosing) {
    end = ' /';
  }
  return `<${start} ${inject} ${props}${end}>`;
};
