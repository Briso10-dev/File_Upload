# File Upload Demo 📁

A simple and efficient file upload application built with modern web technologies. This demo showcases how to handle file uploads using Express.js and TypeScript, with a clean and user-friendly interface.

## 🚀 Features

- Single file upload capability
- Simple and intuitive user interface
- Server-side file handling
- TypeScript implementation for type safety
- Dockerized application for easy deployment

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| Backend | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) |
| Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| File Handling | ![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat-square&logo=node.js&logoColor=white) |

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Briso10-dev/File_Upload.git
cd File_Upload
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

## 🐳 Docker Usage

Build and run the application using Docker:

```bash
# Build the image
docker build -t file-upload-app .

# Run the container
docker run -p 3002:3002 file-upload-app
```

## 🌐 Usage

1. Open your browser and navigate to `http://localhost:3002`
2. Click the file input field to select a file
3. Click the 'Upload' button to submit your file
4. The file will be uploaded to the server

## 👨‍💻 Author

**Seraphin Brice Kouam**
- GitHub: [@Briso10.dev](https://github.com/Briso10-dev)

## 📄 License

This project is licensed under the ISC License.
