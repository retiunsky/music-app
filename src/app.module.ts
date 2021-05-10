import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksModule } from './tracks/tracks.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.mlber.mongodb.net/music?retryWrites=true&w=majority'),
    TracksModule,
    FilesModule
  ]
})
export class AppModule { }
