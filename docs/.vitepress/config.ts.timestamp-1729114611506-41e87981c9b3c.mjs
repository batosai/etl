// docs/.vitepress/config.ts
import { defineConfig } from "file:///home/jerem/D%C3%A9veloppements/packages/etl/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "ETL",
  description: "Extract-transform-load for nodejs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" }
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Usage", link: "/guide/usage" }
        ]
      }
    ],
    socialLinks: [
      { icon: "x", link: "https://x.com/chaufourier" },
      { icon: "discord", link: "https://discord.gg/89eMn2vB" },
      { icon: "github", link: "https://github.com/batosai/etl" }
    ],
    search: {
      provider: "local"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2plcmVtL0RcdTAwRTl2ZWxvcHBlbWVudHMvcGFja2FnZXMvZXRsL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvamVyZW0vRFx1MDBFOXZlbG9wcGVtZW50cy9wYWNrYWdlcy9ldGwvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qZXJlbS9EJUMzJUE5dmVsb3BwZW1lbnRzL3BhY2thZ2VzL2V0bC9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJFVExcIixcbiAgZGVzY3JpcHRpb246IFwiRXh0cmFjdC10cmFuc2Zvcm0tbG9hZCBmb3Igbm9kZWpzXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdHdWlkZScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJywgbGluazogJy9ndWlkZS9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNhZ2UnLCBsaW5rOiAnL2d1aWRlL3VzYWdlJyB9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICd4JywgbGluazogJ2h0dHBzOi8veC5jb20vY2hhdWZvdXJpZXInIH0sXG4gICAgICB7IGljb246ICdkaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy84OWVNbjJ2QicgfSxcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYmF0b3NhaS9ldGwnIH0sXG4gICAgXSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1YsU0FBUyxvQkFBb0I7QUFHL1csSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBO0FBQUEsSUFFWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxJQUM1QjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSx5QkFBeUI7QUFBQSxVQUMxRCxFQUFFLE1BQU0sU0FBUyxNQUFNLGVBQWU7QUFBQSxRQUN4QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sS0FBSyxNQUFNLDRCQUE0QjtBQUFBLE1BQy9DLEVBQUUsTUFBTSxXQUFXLE1BQU0sOEJBQThCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLFVBQVUsTUFBTSxpQ0FBaUM7QUFBQSxJQUMzRDtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
