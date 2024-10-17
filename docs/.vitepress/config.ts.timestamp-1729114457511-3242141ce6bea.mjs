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
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2plcmVtL0RcdTAwRTl2ZWxvcHBlbWVudHMvcGFja2FnZXMvZXRsL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvamVyZW0vRFx1MDBFOXZlbG9wcGVtZW50cy9wYWNrYWdlcy9ldGwvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qZXJlbS9EJUMzJUE5dmVsb3BwZW1lbnRzL3BhY2thZ2VzL2V0bC9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJFVExcIixcbiAgZGVzY3JpcHRpb246IFwiRXh0cmFjdC10cmFuc2Zvcm0tbG9hZCBmb3Igbm9kZWpzXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTWFya2Rvd24gRXhhbXBsZXMnLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1J1bnRpbWUgQVBJIEV4YW1wbGVzJywgbGluazogJy9hcGktZXhhbXBsZXMnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAneCcsIGxpbms6ICdodHRwczovL3guY29tL2NoYXVmb3VyaWVyJyB9LFxuICAgICAgeyBpY29uOiAnZGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvODllTW4ydkInIH0sXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhdG9zYWkvZXRsJyB9LFxuICAgIF0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtWLFNBQVMsb0JBQW9CO0FBRy9XLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQTtBQUFBLElBRVgsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsSUFDNUI7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0scUJBQXFCLE1BQU0scUJBQXFCO0FBQUEsVUFDeEQsRUFBRSxNQUFNLHdCQUF3QixNQUFNLGdCQUFnQjtBQUFBLFFBQ3hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxLQUFLLE1BQU0sNEJBQTRCO0FBQUEsTUFDL0MsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxNQUN2RCxFQUFFLE1BQU0sVUFBVSxNQUFNLGlDQUFpQztBQUFBLElBQzNEO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
