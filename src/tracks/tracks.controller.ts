import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, Query, UseInterceptors } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('tracks')
export class TracksController {
  constructor(private trackServise: TracksService) { }
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { picture, audio } = files
    return this.trackServise.create(dto, picture[0], audio[0])
  }
  @Get()
  getAll(@Query('count') count: number,
    @Query('offset') offset: number) {
    return this.trackServise.getAll(count, offset)
  }
  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackServise.search(query)
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackServise.getOne(id)
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackServise.delete(id)
  }
  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackServise.addComment(dto)
  }
  @Post('/listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.trackServise.listen(id)
  }

}
