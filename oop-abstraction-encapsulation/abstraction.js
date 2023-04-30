class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approveCourses,
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approveCourses = approveCourses;
    this.learningPaths = learningPaths;
  }
}

const yordy = new Student({
  name: 'Yordy Leonardo Almonte Ruiz',
  username: 'yordyr06_',
  email: 'yoalmonte.dev@outlook.com',
  twitter: 'yordyr06',
  instagram: 'yordyr06_',
});

const darian = new Student({
  name: 'Darian Then',
  username: 'darythen',
  email: 'darythen@gmail.com',
  instagram: 'darythen',
});