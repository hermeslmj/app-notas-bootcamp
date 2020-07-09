export default (mongoose) => {
    const schema = mongoose.Schema({
        name: {
            type: String,
            required:  true
        },
        subject: {
            type: String,
            required:  true
        },
        type: {
            type: String,
            required:  true
        },
        value: {
            type: String,
            required:  true
        },
        lastModified: {
            type: Date,
            default: Date.now()
        }
    });

    const GradeModel = mongoose.model('grades', schema, 'grades');

    return GradeModel;
}