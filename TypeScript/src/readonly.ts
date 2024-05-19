interface Config {
    endpoint: string;
    apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };


  type User2 = {
    readonly name: string,
    readonly email: string,
    readonly age: number
  }

  const user: User2 = {
    name : "soham",
    email: "sohamnimbalkar07@gmail.com",
    age: 23
  }