<template lang="html">
  <div class="main">
    <div class="title">Products</div>
    <div class="search">
      <input type="text" v-model=input placeholder="Search..." class="input" />
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {{ searchOption }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#" @click="searchOptionSel('Any')">Any</a></li>
          <li><a class="dropdown-item" href="#" @click="searchOptionSel('By Tags')">By Tags</a></li>
          <li><a class="dropdown-item" href="#" @click="searchOptionSel('By Platforms')">By Platforms</a></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-outline-primary btnExtra" type="button" id="optionBtn1" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Products</button>
    <button class="btn btn-outline-success btnExtra" type="button" id="optionBtn2">Export to CSV</button>
    <div class="text">
      Total Items: {{ filteredList().length }}
    </div>
    <div class="prodcontainer">
      <div class="leftcontainer">
        <div class="colname">
          <div class="colitem">Item</div>
          <div class="colqty">Quantity</div>
          <div class="coltags">Tags</div>
        </div>
        <div v-for="item in filteredList()" :key="item" >
          <div class="productitem" @click="onClickItem(item)">
            <img src="../../assets/images/icons/stockit_logo.png" alr="Vue">
            <div class="productname">{{ item.name }}</div>
            <div class="productquantity">{{ item.quantity }}</div>
            <div class="producttags">{{ item.tags  }}</div>
          </div>
        </div>
      </div>
      <div class="rightcontainer">
        <div class="image">
          <img src="../../assets/images/icons/stockit_logo.png" alr="Vue">
        </div>
        <div v-if="this.selected == null">
          <div class="emptytext">Select an item to start</div>
        </div>
        <div v-else>
          <div v-if="!isEditMode">
            <div class="item">Title: {{ selected.name }}</div>
            <div class="sku">SKU: {{ selected.sku }}</div>
            <div class="qty">Quantity: {{ selected.quantity }}</div>
            <div class="price">Price: {{ selected.price }}</div>
            <div class="platform">Platforms</div>
            <buttons buttonClass="btn-light" v-on:click="onClickEditButton">Edit</buttons>
          </div>
          <div v-else>
            Title:
            <input type="text" class="form-control" v-model="editBuffer.name">
            SKU:
            <input type="text" class="form-control" v-model="editBuffer.sku">
            Quantity:
            <input type="text" class="form-control" v-model="editBuffer.quantity">
            Price:
            <input type="text" class="form-control" v-model="editBuffer.price">
            <br>
            <buttons buttonClass="btn-light" v-on:click="onClickEditButton">Edit</buttons>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Products</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="!isAddProductMode">
            <button type="button" class="btn btnspec btn-outline-primary" v-on:click="onClickAddProduct">
              <h6>One Product</h6>
            </button>
            <hr>
            <usecsv-button importerKey="your-importer-key">
              <button type="button" class="btn btnspec btn-outline-primary">
              <h6>More than One Products</h6>
            </button>
            </usecsv-button>
          </div>
          <div class="modal-body" v-else>
            Title:
            <input type="text" class="form-control" v-model="editBuffer.name">
            SKU:
            <input type="text" class="form-control" v-model="editBuffer.sku">
            Quantity:
            <input type="text" class="form-control" v-model="editBuffer.quantity">
            Price:
            <input type="text" class="form-control" v-model="editBuffer.price">
            <br>
            <buttons buttonClass="btn-light" v-on:click="onClickCreateButton">Create</buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<script>
export default {
  data () {
    return {
      input: '',
      selected: null,
      searchOption: 'Any',
      items: [
        { name: 'apple', quantity: '661', tags: 'fruit, edible', sku: 'SKU456239407', price: '$1.20' },
        { name: 'happy clouds floating', quantity: '181', tags: 'fruit, edible', sku: 'SKU370540450', price: '$3.50' },
        { name: 'orange', quantity: '161', tags: 'fruit, edible', sku: 'SKU196856072', price: '$3.50' },
        { name: 'pineapple', quantity: '11', tags: 'fruit, edible', sku: 'SKU399405582', price: '$13.85' },
        { name: 'turbo boosted ultr extreme tuna', quantity: '16', tags: 'fruit, edible', sku: 'SKU830832967', price: '$1.20' },
        { name: 'dancing in the moon night on the shore', quantity: '23', tags: 'fruit, edible', sku: 'SKU456239407', price: '$13.85' },
        { name: 'dreams chaser sky horizon', quantity: '1616', tags: 'fruit, edible', sku: 'SKU411406106' },
        { name: 'apple tomato sausage', quantity: '661', tags: 'fruit, edible', sku: 'SKU583707086', price: '$1.20' },
        { name: 'data must be a function.', quantity: '181', tags: 'fruit, edible', sku: 'SKU797661811' },
        { name: 'Thanks for this answer. the first <div was a typo.', quantity: '161', tags: 'fruit, edible', sku: 'SKU456239407', price: '$13.85' },
        { name: 'Browse other questions tagged', quantity: '11', tags: 'fruit, edible', sku: 'SKU662867303', price: '$13.85' },
        { name: 'Music playing softly Music playing softly', quantity: '16', tags: 'fruit, edible', sku: 'SKU445225984', price: '$1.20' },
        { name: 'The world spins round', quantity: '23', tags: 'fruit, edible', sku: 'SKU456239407', price: '$1.20' },
        { name: 'Running through the fields with the wind at my back', quantity: '1616', tags: 'fruit, edible', sku: 'SKU476671907', price: '$3.50' },
        { name: 'sound of rain tapping on the windowpane', quantity: '161', tags: 'fruit, edible', sku: 'SKU116496296' },
        { name: 'peaceful silence', quantity: '11', tags: 'fruit, edible', sku: 'SKU715257277', price: '$3.50' },
        { name: 'Music playing softly Music playing softly', quantity: '16', tags: 'fruit, edible', sku: 'SKU463427997' },
        { name: 'freshly baked cookies', quantity: '23', tags: 'fruit, edible', sku: 'SKU648004666' },
        { name: 'crisp mountain air', quantity: '1616', tags: 'fruit, edible', sku: 'SKU456239407', price: '$13.85' }
      ],
      isEditMode: false,
      editBuffer: null,
      isAddProductMode: false
    }
  },
  methods: {
    flipselection (sel) {
      this.searchOption = sel
    },
    filteredList () {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.input.toLowerCase())
      )
    },
    /**
     * Stores the item clicked in variable for display
     * @param item
     */
    onClickItem (item) {
      this.selected = item
    },
    onClickEditButton () {
      this.isEditMode = true
      // deepcopy a object
      this.editBuffer = JSON.parse(JSON.stringify(this.selected))
    },
    /**
     * Update the selected item in the item list with user input new information.
     * Input validation included.
     */
    onClickUpdateButton () {
      // find the index of selected item based on sku
      const index = this.items.findIndex((item) => item.sku === this.selected.sku)
      // validate the input
      if (this.editBuffer.name === '') {
        alert('Name cannot be empty')
        return
      }
      if (this.editBuffer.sku === '') {
        alert('sku cannot be empty')
        return
      }
      if (this.editBuffer.quantity < 0) {
        alert('Quantity cannot be negative')
        return
      }
      if (this.editBuffer.price === '') {
        alert('Price cannot be empty')
        return
      }
      // update the item
      this.items[index] = this.editBuffer
      // update the UI status
      this.isEditMode = false
      this.editBuffer = null
      this.selected = this.items[index]
    },
    onClickAddProduct () {
      this.isAddProductMode = true
      this.editBuffer = {
        name: '',
        quantity: 0,
        tags: '',
        sku: '',
        price: ''
      }
    },
    onClickCreateButton () {
      // validate the input
      if (this.editBuffer.name === '') {
        alert('Name cannot be empty')
        return
      }
      if (this.editBuffer.sku === '') {
        alert('sku cannot be empty')
        return
      }
      if (this.editBuffer.quantity < 0) {
        alert('Quantity cannot be negative')
        return
      }
      if (this.editBuffer.price === '') {
        alert('Price cannot be empty')
        return
      }
      // add the item
      this.items.push(this.editBuffer)
      // update the ui
      this.isAddProductMode = false
      this.editBuffer = null
      // alert the user
      alert('Product added successfully')
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 1rem;
  .title {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 26px;
    color: #454648;
    width: 67vw;
    position: absolute;
    top: 5vh;
    padding-left: 10px;
  }
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    .dropdown {
      margin-left: 2rem;
      .btn-primary {
        background-color: #ffffff;
        border-color: #ffffff;
        color: #434343;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    }
  }
  .text {
    padding-top: 1.5rem;
  }
  .btnExtra {
    margin-top: 1rem;
    margin-right: 1rem;
    font-size: small;
  }
  .prodcontainer {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    .leftcontainer {
      display: flex;
      flex-direction: column;
      float: left;
      width: 55vw;
      .colname {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        width: 55vw;
        border-radius: 3%;
        color: #282828;
        font-weight: 500;
        margin-top: 10px;
        box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
        .colitem {
          width: 35vw;
          padding: 15px;
          padding-right: 0px;
        }
        .colqty {
          width: 10vw;
          padding: 15px;
          padding-right: 0px;
          padding-left: 0px;
        }
        .coltags {
          padding: 15px;
          padding-right: 0px;
          padding-left: 0px;
        }
      }
      .productitem {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        margin-top: 2%;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
        img {
          width: 5vw;
        }
        .productname {
          width: 30vw;
          border-right: 1px solid #efefef;
          padding: 20px;
        }
        .productquantity {
          width: 10vw;
          padding: 20px;
          border-right: 1px solid #efefef;
        }
        .producttags {
          width: 10vw;
          padding: 20px;
        }
        &:hover {
          box-shadow: rgba(62, 29, 88, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
      }
    }
    .rightcontainer {
      position: fixed;
      float: left;
      margin-left: 57vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 63vh;
      width: 20vw;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        height: 200px;
      }
      img {
        width: 10vw;
      }
      .item {
        padding: 20px;
        border-bottom: #cbcbcb 1px solid;
      }
      .sku {
        padding: 20px;
        border-bottom: #cbcbcb 1px solid;
      }
      .qty {
        padding: 20px;
        border-bottom: #cbcbcb 1px solid;
      }
      .price {
        padding: 20px;
        border-bottom: #cbcbcb 1px solid;
      }
      .platform {
        padding: 20px;
      }
      .emptytext {
        font-weight: bold;
        color: #747474;
      }
    }
  }
}
.input {
  display: block;
  width: 48vw;
  padding: 10px 45px;
  background: white url("../../assets/images/icons/search.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.btnspec {
  width: 100%;
  height: 40px;
  border-color: #a39cc3;
  &:hover {
    background-color: #a39cc3;
    border-color: #a39cc3;
  }
}
</style>
