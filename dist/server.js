"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskRoutes_1 = __importDefault(require("./src/api/routes/taskRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/tasks', taskRoutes_1.default);
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map