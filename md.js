
db.academic_records.insertMany([
    {
      student_id: 1,
      name: "John Doe",
      grades: [85, 90, 92],
      subjects: ["Math", "Science", "English"]
    },
    {
      student_id: 2,
      name: "Jane Smith",
      grades: [78, 88, 95],
      subjects: ["Math", "Science", "English"]
    }
  ]);
  

  db.co_curricular_activities.insertMany([
    {
      student_id: 1,
      name: "John Doe",
      activity_type: "Sports",
      duration: 12,
      achievements: ["Won Gold in Basketball tournament", "Best Player of the Year"]
    },
    {
      student_id: 2,
      name: "Jane Smith",
      activity_type: "Music",
      duration: 24,
      achievements: ["Performed in National Music Competition", "Won First Prize in Piano Solo"]
    }
    // Add more co-curricular activities
  ]);
  