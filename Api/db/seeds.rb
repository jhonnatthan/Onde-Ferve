# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {
    name: "Jhonnatthan Santana",
    username: "jhonnatthan",
    email: "jhonnatthans@outlook.com",
    password: "123456",
  }, {
    name: "Guilherme Santos",
    username: "guyi02",
    email: "guyi02@gmail.com",
    password: "123456",
  },
])
