# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

task_categories_arr = [
    "Moving", "Furniture Assembly", "Mounting", "Home Repairs", "Cleaning", "Heavy Lifting", "Delivery", "Yard Work", "Personal Assistant", "Packing & Unpacking", "Painting", "Plumbing", "Electrical Work", "Deep Clean", "Organization", "Event Staffing", "Run Errands", "Wait in Line", "Carpentry"
] # arr.length = 19

vehicle_type_arr = [
    "none", "car", "truck"
]

tasker_rank_arr = [
    "regular", "regular", "regular", "regular", "regular",
    "elite tasker", "elite tasker", "elite tasker",
    "great value", "great value"
] # arr.length = 10

first_name_arr = [
    "Del", "Margarito", "Lamar", "Damian", "Johnson", "Andy", "Stephan", "Walker", "Luis", "Theo", "Rhett", "Lionel", "Ramiro", "Michale", "Freeman", "Marcelo", "Rickie", "Benny", "Morton", "Wiley",
    "Chanel", "Kerrie", "Savannah", "Cira", "Madge", "Estrella", "Brenda", "Marnie", "Kym", "Min", "Nicki", "Elane", "Annis", "Erika", "Ellamae", "Lakesha", "Tamekia", "Glenda", "Marisol", "Emelia"
] # arr.length = 40

last_name_arr = ("A".."Z").to_a.map{ |x| x.concat(".") } # for privacy, only first letter of last name is shown

hourly_rate = sprintf("%.2f", rand(0.1..0.7)*100).to_f # generate random hourly rate to second decimal

tasker2 = User.create(first_name: first_name_arr[rand(0...40)], last_name: last_name_arr[rand(0...26)], email: rand(0..99999).to_s.concat("@taskhero.com"), password: "password123", zipcode: rand(90000..99999), is_tasker: true, hourly_rate: sprintf("%.2f", rand(0.1..0.7)*100).to_f, tasker_aboutme: "I've help clients with mounting large/bulky pieces of artwork, pictures, curtains and window dressings, as well as TV mounts (larger units require clients help or 2nd tasker).", tasker_rank: tasker_rank_arr[rand(0...10)], tasker_skill_type: task_categories_arr[rand(0...19)], vehicle_type: vehicle_type_arr[rand(0..2)], num_completed_tasks: rand(100..200), reviews_rating: rand(85..100), reviews_num: rand(50..100))