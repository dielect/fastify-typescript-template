# fastify-typescript-template

A template for integrating Fastify with TypeScript, providing a streamlined setup for web applications.



## 🚀 Features

- ⚡️ **Fastify** - High-performance web framework
- 🔷 **TypeScript** - Type-safe development
- 🔗 **Custom Path Aliases** - Simplified imports
- 🧹 **ESLint** - Code quality and consistency

<br>

## 🛠️ Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/dielect/fastify-typescript-template
   ```
    Or use the "Use this template" button to create a new repository.


<br>
2. Install dependencies:

   ```shell
   # Using pnpm (recommended)
   pnpm install
   
   # Or using yarn
   yarn install
   
   # Or using npm
   npm install
   ```

## 🏃‍♂️ Usage

### Development

Start the development server:

```shell
npm run dev
```

### Linting

Lint your code:

```shell
npm run lint
```

## 

### Custom Aliases for Paths

We can use predefined aliases for `import` paths already used in this project. Following are the details:

| Alias | Target Path |
| ----- | ----------- |
| `@`   | `/src`      |

Example:

```typescript
import { someFunction } from '@/utils';
```



## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 📞 Support

If you have any questions or need help, please open an issue or contact us at [dielectric.army@gmail.com](dielectric.army@gmail.com).
