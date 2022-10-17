import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';


@Injectable()
export class JogosService {
  
  findAll() {
    this.Jogos;
  }
  private Jogos: Jogo [] = [];
    create(CreateJogoDto: CreateJogoDto){
      const atualIdMax = this.Jogos [this.Jogos.length - 1]?.id || 0;
      const id = atualIdMax + 1;
      const jogo = {
        id,
        ...CreateJogoDto
      }
      this.Jogos.push(jogo)
        return jogo
    }

  findOne(id: number) {
    const index = this.Jogos.findIndex((Jogo) => Jogo.id === id);
    return this.Jogos[index];
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const jogo = this.findOne(id);
    const novoJogo = {
      ...jogo,
      ...updateJogoDto
    }
    const index = this.Jogos.findIndex((Jogo) => Jogo.id === id);
    this.Jogos[index] = novoJogo;
      return novoJogo;
  }

  remove(id: number) {
    const index = this.Jogos.findIndex((Jogo) => Jogo.id === id)
    if (index === -1) {
      throw new NotFoundException ("Jogo não encontrado!");
    }
    this.Jogos.splice(index, 1)
  }
}
