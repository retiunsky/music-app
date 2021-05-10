import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesService } from 'src/files/files.service';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { Track, TrackSchema } from './schemas/track.schema';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])
  ],
  controllers: [TracksController],
  providers: [TracksService, FilesService]
})
export class TracksModule { }
