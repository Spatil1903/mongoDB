

const database = 'stud_info';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);



db.createCollection("academic_records", {
    validator: {
      $jsonSchema: {
        jsonType: "object",
        required: ["student_id", "name", "grades", "subjects"],
        properties: {
          student_id: {
            jsonType: "int",
            description: "Student ID"
          },
          name: {
            jsonType: "string",
            description: "Student Name"
          },
          grades: {
            jsonType: "array",
            description: "Student Grades"
          },
          subjects: {
            jsonType: "array",
            description: "Student Subjects"
          }
          // Add more fields as needed
        }
      }
    }
  });
  
  // Collection for co-curricular activities
  db.createCollection("co_curricular_activities", {
    validator: {
      $jsonSchema: {
        jsonType: "object",
        required: ["student_id", "name", "activity_type", "duration", "achievements"],
        properties: {
          student_id: {
            jsonType: "int",
            description: "Student ID"
          },
          name: {
            jsonType: "string",
            description: "Student Name"
          },
          activity_type: {
            jsonType: "string",
            description: "Activity Type"
          },
          duration: {
            jsonType: "int",
            description: "Duration (in months)"
          },
          achievements: {
            jsonType: "array",
            description: "Achievements"
          }
          // Add more fields as needed
        }
      }
    }
  });
  