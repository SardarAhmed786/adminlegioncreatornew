class MyClass {
    static getUniqueWindowId(session) {
        // Logic to generate a unique window ID based on the session
        return `window-${session}-${Date.now()}`;
    }
}

export default MyClass;