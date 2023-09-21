export default () => ({
  isLoading: true,
  entries  : [
    {
      id     : new Date().getTime(),
      date   : new Date().toDateString(),
      text   : "Culpa ad reprehenderit occaecat pariatur pariatur sint eu pariatur quis.",
      picture: null,
    },
    {
      id     : new Date().getTime() + 1000,
      date   : new Date().toDateString(),
      text   : "Excepteur ut anim eiusmod laboris exercitation ex aliquip exercitation minim mollit et anim nostrud.",
      picture: null,
    },
    {
      id     : new Date().getTime() + 2000,
      date   : new Date().toDateString(),
      text   : "Ea mollit est ad quis laborum qui ad ea excepteur irure eu elit labore.",
      picture: null,
    },
  ],
});
