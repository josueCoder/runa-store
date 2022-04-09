const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
//de html

module.exports = {
  
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js', // nombre del archivo js resultante
        publicPath: '/'
    },
    mode:'development',
    resolve: { // extensión de archivos a tomar en cuenta
        extensions: ['.js', '.jsx'],
        
        alias:{
            '@components': path.resolve(__dirname,'src/components/'),
            '@containers': path.resolve(__dirname,'src/containers/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@hooks': path.resolve(__dirname,'src/hooks/')
        }

    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                use: [
                    {
                        loader: 'html-loader' // loader a usar
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                 
                  "style-loader",
                 
                  "css-loader",
                  
                  "sass-loader",
                ],
         },
         {
             test: /\.(png|svg|jpg|gif)$/,
             type:'asset'
         }
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ 
            template: './public/index.html', 
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        
            allowedHosts: path.join(__dirname, 'build'),
            historyApiFallback: true,
            compress: true,
            port: 3005,
            open: true,
       
    }
    
}