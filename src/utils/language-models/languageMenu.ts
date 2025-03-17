interface Provider {
  id: string;
  name: string;
  base_url: string;
  models?: Model[];
  des?: string;
}

interface Model {
  id: string;
  label: string;
  value: string;
  des?: string;
}

const providers: Provider[] = [
  {
    id: '1',
    name: '通义千问',
    base_url: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    models:[
      {
        id: 'qwen-mt-plus',
        label: 'qwen-mt-plus',
        value: 'qwen-mt-plus',
      }
    ]
  }
 ]
 export default providers;