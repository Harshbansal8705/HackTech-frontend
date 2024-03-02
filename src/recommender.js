const fs = require('fs');
const csv = require('csv-parser');

export const match_courses_with_preferences = (preferences, roll_no, data) => {
    data.forEach(row => {
        row['Keywords'] = row['Keywords'] || '';
    });

    let matched_courses;
    if (preferences) {
        matched_courses = data.filter(row => row['Keywords'].toLowerCase().includes(preferences.toLowerCase()));
    } else {
        const code = roll_no.slice(2, 4);
        matched_courses = data.filter(row => row['Course code'].startsWith(code));
    }

    matched_courses.forEach(row => {
        row['Matched Keywords'] = row['Keywords'].split(' ').filter(word => preferences.toLowerCase().includes(word.toLowerCase())).length;
    });

    matched_courses.sort((a, b) => b['Matched Keywords'] - a['Matched Keywords']);

    return matched_courses.map(row => row['Course code']);
};

export const recommend = (preferences, roll_no) => {
    const data = [];
    fs.createReadStream('./assets/merged_data.csv')
        .pipe(csv())
        .on('data', row => {
            data.push(row);
        })
        .on('end', () => {
            const course_codes = match_courses_with_preferences(preferences, roll_no, data);
            console.log(course_codes);
        });
}